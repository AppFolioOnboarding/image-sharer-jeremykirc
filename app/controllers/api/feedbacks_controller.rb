module Api
  class FeedbacksController < ApplicationController
    def create
      Feedback.create!(name: params[:name], comment: params[:comment])
      render json: {}, status: :created
    rescue ActiveRecord::RecordInvalid => e
      render json: { error: e.message }, status: :bad_request
    end
  end
end
