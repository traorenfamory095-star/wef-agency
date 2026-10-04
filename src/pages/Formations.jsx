import React, { useState } from 'react';
import { formationsData } from '../data/formations';
import FormationCard from '../components/FormationCard';
import { BookOpen, ShieldCheck, CheckCircle } from 'lucide-react';

function Formations() {
  const [selectedFormation, setSelectedFormation] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setSelectedFormation(null);
      setPhone('');
    }, 4000);
  };

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <BookOpen className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Nos Formations & Guides en Ligne</h1>
        <p className="text-lg text-gray-600">Achetez nos vidéos de formation et PDF, et développez vos compétences.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {formationsData.map((formation) => (
          <div key={formation.id} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col justify-between">
            <FormationCard formation={formation} />
            <div className="p-6 pt-0">
              <button 
                onClick={() => setSelectedFormation(formation)}
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
              >
                Acheter ({formation.price || "20$"})
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Fenêtre Modale de Paiement Mobile Money & Carte */}
      {selectedFormation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
            <button 
              onClick={() => setSelectedFormation(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
            >
              ✕
            </button>

            {isSuccess ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">Paiement Réussi !</h3>
                <p className="text-gray-600">Votre accès au contenu a été envoyé avec succès.</p>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Finaliser l'achat</h3>
                <p className="text-sm text-gray-600 mb-6">Article : <span className="font-semibold">{selectedFormation.title}</span></p>
                
                <form onSubmit={handlePayment} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mode de paiement</label>
                    <select 
                      value={paymentMethod} 
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    >
                      <option value="mpesa">M-Pesa (Vodacom)</option>
                      <option value="orange">Orange Money</option>
                      <option value="airtel">Airtel Money</option>
                      <option value="card">Carte Bancaire (Visa / Mastercard)</option>
                    </select>
                  </div>

                  {paymentMethod !== 'card' ? (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Numéro de téléphone</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="Ex: +243 820 000 000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Numéro de carte</label>
                        <input type="text" required placeholder="4532 •••• •••• ••••" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm" />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input type="text" required placeholder="MM/AA" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm" />
                        <input type="password" required placeholder="CVV" className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm" />
                      </div>
                    </div>
                  )}

                  <button type="submit" className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition flex items-center justify-center space-x-2 mt-6">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Payer {selectedFormation.price || "20$"}</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Formations;