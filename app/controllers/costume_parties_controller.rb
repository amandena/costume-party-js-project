class CostumePartiesController < ApplicationController
  def index
    @parties = CostumeParty.all
  end

  def show
  end

  def new
    @party = CostumeParty.new
  end

  def create
    @party = CostumeParty.new(costume_party_params)
    if @party.save
      redirect_to costume_parties_path(@party)
    else
      redirect_to new_costume_parties_path
    end
  end

  def update
  end

  def edit
  end

  def destroy
  end

  private

  def costume_party_params
    params.require(:costume_party).permit(:name, :date, :time, :user_id)
  end
end
