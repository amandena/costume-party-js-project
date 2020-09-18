class CostumesController < ApplicationController
  before_action :find_costume, only: [:show, :edit, :update, :destroy]

  def scariest
    @costume = Costume.scariest
  end

  def index
    @costumes = Costume.all
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def new
    if params[:costume_party_id]
      @party = CostumeParty.find(costume_params[:costume_party_id])
      if @party.nil?
        redirect_to costume_parties_path
      else
        @costume = @party.costumes.build
      end
    else
      @costume = Costume.new
    end
  end

  def create
    #binding.pry
    @party = CostumeParty.find(costume_params[:costume_party_id])
    @costume = @party.costumes.new(costume_params)
    @costume.user = current_user
    if @costume.save
      redirect_to @costume
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @costume.update(costume_params)
      redirect_to @costume
    else
      redirect_to edit_costume_path
    end
  end

  def destroy
    @costume.destroy
    redirect_to costumes_path
  end

  private

  def costume_params
    params.require(:costume).permit(:name, :clothing_1, :clothing_2, :accessory_1, :accessory_2, :cost, :scare_rating, :costume_party_id)
  end

  def find_costume
    @costume = Costume.find_by(id: params[:id])
  end
end
