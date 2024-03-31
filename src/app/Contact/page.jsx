// components/ContactForm.js

import React from 'react';

export default function ContactForm() {
  return (
    <div className="flex flex-col items-center bg-primary p-8 rounded-lg ">
      <h1 className="text-2xl font-semibold mb-4">Contact</h1>
      <form action="" className="w-1/2 ">
        <div className="mb-4">
          <label htmlFor="companyName" className="block font-medium">
            Nom de l'Entreprise:
          </label>
          <input
            type="text"
            id="companyName"
            className="w-full border rounded-md p-2 shadow-md"
            placeholder="Entrez le nom de votre entreprise"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">
            Adresse e-mail:
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded-md p-2 shadow-md"
            placeholder="Entrez votre adresse e-mail"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block font-medium">
            Numéro de téléphone:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="w-full border rounded-md p-2 shadow-md"
            placeholder="Entrez votre numéro de téléphone"
          />
        </div>
        <div className="mb-4">
          <p className="font-medium">Vos Besoins:</p>
          <label className="block">
            <input type="checkbox" className="mr-2 shadow-md" />
            Création d'un site web
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2 shadow-md" />
            Refonte de site existant
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2 shadow-md" />
            Stratégie de marketing numérique
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2 shadow-md" />
            Conception graphique
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2 shadow-md" />
            Autre (précisez ci-dessous)
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium">
            Message:
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full border rounded-md p-2 shadow-md"
            placeholder="Écrivez votre message ici..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-tertinary text-white px-4 py-2 rounded-md hover:bg-secondary hover:text-black font-bold shadow-md"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
