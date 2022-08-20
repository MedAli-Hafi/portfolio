import React from 'react'

function Contact() {
    const contactInformations = {
        email: 'mohamed.ali.hafi.contact@gmail.com',
        phoneNumber: '+216 24 100 995',
        address: {
            city: 'Sfax',
            country: 'Tunisia',
            street: 'AVENUE MAJIDA BOULILA',
            postalCode: 3027
        }
    }
    return (
        <div>
            <p> <i class="bi bi-envelope"></i> {contactInformations.email}</p>
            <p> <i class="bi bi-telephone"></i> {contactInformations.phoneNumber}</p>
            <p> <i class="bi bi-geo-alt"></i> {contactInformations.address.street} ; {contactInformations.address.postalCode} {contactInformations.address.city} ; {contactInformations.address.country}</p>
            <p></p>
        </div>
    )
}

export default Contact