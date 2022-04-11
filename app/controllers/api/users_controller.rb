class Api::UsersController < ApplicationController
    def update_image
        puts '-------PARAMS-----'
        puts params
        
        # params[:fileYO]
        render json: params 

        #TODO is actually use params to add image to cloudinary
    end
end
