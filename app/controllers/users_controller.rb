class UsersController < ApplicationController
  def show
    @nickname = current_user.nickname
    @messages = current_user.messages.page(params[:page]).per(4).order("created_at DESC")
  end
end
