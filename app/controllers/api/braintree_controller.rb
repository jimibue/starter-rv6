class Api::BraintreeController < ApplicationController
  # gives the token we need to setup the UI
  def token
    render json: ENV['BRAINTREE_DROPIN_TOKEN']
  end

  # => amount, nonce...
  # => transaction id if successfull.
  def payment

    result = Braintree::Transaction.sale(
      :amount => params[:amount],
      :payment_method_nonce => params[:nonce],
      :options => {
        # charge the card right now
        :submit_for_settlement => true
      }
    )

    # success
    if result.success?
      render json: result.transaction.id
    # something with the card  
    elsif result.transaction
      text = "text: #{result.transaction.processor_response_text}"
      code = "code: #{result.transaction.processor_response_code}"
      render json: { errors: { text: text, code: code } }
     # something went wrong not on braintrees end (me problem)  
    else
      render json: { errors: result.errors, }, status: 422
    end
  end
end
