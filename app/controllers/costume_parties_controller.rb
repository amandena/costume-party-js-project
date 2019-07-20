class CostumePartiesController < ApplicationController
  before_action :find_party, only: [:show, :update, :edit, :destroy]

  def index
    @parties = CostumeParty.all
    respond_to do |f|
      f.html
      f.json {render json: @parties}
    end
  end

  def show
    respond_to do |f|
      f.html
      f.json {render json: @party}
    end
  end

  def new
    @party = CostumeParty.new
  end

  def create
    @party = CostumeParty.new(costume_party_params)
    @party.user_id = current_user.id
    if @party.save
      redirect_to @party
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @party.update(costume_party_params)
      redirect_to @party
    else
      redirect_to edit_costume_party_path
    end
  end

  def destroy
    @party.destroy
    redirect_to costume_parties_path
  end

  private

  def costume_party_params
    params.require(:costume_party).permit(:name, :date, :time, :user_id)
  end

  def find_party
    @party = CostumeParty.find(params[:id])
  end
end
