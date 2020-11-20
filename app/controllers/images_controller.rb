class ImagesController < ApplicationController
  IMAGE_SAVED = 'Image saved!'.freeze

  def new
    @image = Image.new
  end

  def create
    @image = Image.new(image_params)
    if @image.save
      flash[:success] = IMAGE_SAVED
      redirect_to images_path
    else
      render :new
    end
  end

  def index
    @images = Image.order(created_at: :desc).limit(50)
  end

  def destroy
    Image.find(params[:id]).destroy!
  end

  private

  def image_params
    params.require(:image).permit(:link, tag_list: [])
  end
end
