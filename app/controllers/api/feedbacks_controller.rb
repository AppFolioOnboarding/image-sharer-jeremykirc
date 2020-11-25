module Api
  class FeedbacksController < ApplicationController
    FEEDBACK_SUCCESS = 'Feedback saved!'.freeze
    FEEDBACK_ERROR = 'Failed to save feedback'.freeze

    def create
      Feedback.create!(name: params[:name], comment: params[:comment])
      render json: { message: FEEDBACK_SUCCESS }, status: :created
    rescue ActiveRecord::RecordInvalid => e
      err_msg = e.message.gsub('Validation failed: ', '')
      render json: { message: "#{FEEDBACK_ERROR}: #{err_msg}" },
             status: :bad_request
    end
  end
end
