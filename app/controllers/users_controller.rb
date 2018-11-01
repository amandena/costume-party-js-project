class UsersController < ApplicationController
  before_action :find_user, only: [:show, :edit, :update]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to @user
    else
      redirect_to new_user_path
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

  def find_user
    @user = User.find(params[:id])
  end
end
