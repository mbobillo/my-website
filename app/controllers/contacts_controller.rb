class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      redirect_to new_contact_path, notice: 'Message envoyé.'
    else
      flash.now[:alert] = "Erreur lors de l'envoi du message."
      render :new, status: :unprocessable_entity
    end
  end

  private
  def contact_params
    params.require(:contact).permit(:last_name, :first_name, :email, :message)
  end
end
