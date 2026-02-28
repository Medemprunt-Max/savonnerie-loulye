/**
 * create-checkout-session.js — Netlify Serverless Function
 * ─────────────────────────────────────────────────────────
 * TODO (Prompt 6) : Intégration Stripe Checkout
 *
 * Flow attendu :
 * ──────────────
 * 1. Le front-end envoie un POST avec le panier :
 *    {
 *      items: [
 *        { slug: "savon-lavande", name: "Savon Lavande", price: 750, qty: 2, image: "https://..." },
 *        ...
 *      ]
 *    }
 *    Note : price en centimes (Stripe travaille en centimes)
 *
 * 2. Cette fonction :
 *    a. Valide les données reçues (slugs, prix, quantités)
 *    b. Optionnel : re-vérifie les prix côté serveur (ex : lookup dans les content collections ou un JSON statique)
 *    c. Crée une session Stripe Checkout avec :
 *       - line_items : les articles du panier
 *       - mode: 'payment'
 *       - shipping_options : [{ shipping_rate: 'shr_xxx' }] ou shipping calculé
 *       - Livraison forfaitaire 5,90€ si sous-total < 50€, offerte sinon
 *       - success_url : https://savonnerieloulye.fr/confirmation?session_id={CHECKOUT_SESSION_ID}
 *       - cancel_url : https://savonnerieloulye.fr/panier
 *       - locale: 'fr'
 *       - metadata : infos utiles (source, version, etc.)
 *
 * 3. Retourne l'URL de la session Stripe au front-end
 *    { url: "https://checkout.stripe.com/c/pay/..." }
 *
 * 4. Le front-end redirige l'utilisateur vers cette URL
 *
 * Prérequis :
 * ───────────
 * - npm install stripe
 * - Variable d'environnement STRIPE_SECRET_KEY dans Netlify
 * - Créer les produits/prix dans le dashboard Stripe OU utiliser les prix inline (price_data)
 * - Configurer le webhook Stripe pour les événements checkout.session.completed
 *
 * Sécurité :
 * ──────────
 * - Ne JAMAIS faire confiance aux prix envoyés par le front-end
 * - Toujours re-vérifier côté serveur
 * - Utiliser STRIPE_SECRET_KEY uniquement côté serveur (jamais exposée au client)
 */

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  // Uniquement POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // const { items } = JSON.parse(event.body);

    // TODO: Valider les items
    // TODO: Re-vérifier les prix côté serveur
    // TODO: Calculer les frais de livraison
    // TODO: Créer la session Stripe Checkout
    // TODO: Retourner l'URL de checkout

    // Placeholder response
    return {
      statusCode: 501,
      body: JSON.stringify({
        error: 'Paiement en ligne bientôt disponible',
        message: 'La fonction Stripe Checkout sera implémentée au prompt 6.',
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erreur serveur' }),
    };
  }
};
