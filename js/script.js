function modifierProfil() {
  alert("Fonction de modification simulée.");
}

function exporterProfil() {
  const data = {
    nom: "Dupont",
    prenom: "Alice",
    email: "alice.dupont@example.com"
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "profil.json";
  a.click();
  URL.revokeObjectURL(url);
}

function confirmerSuppression() {
  if (confirm("Êtes-vous sûr(e) de vouloir supprimer votre compte ? Cette action est irréversible.")) {
    alert("Compte supprimé (simulation). Redirection vers l'accueil...");
  }
}

function verifierConsentement() {
  const consentement = document.getElementById("consentement");
  if (!consentement.checked) {
    alert("Vous devez accepter la politique de confidentialité pour vous inscrire.");
    return false;
  }
  alert("Inscription simulée avec succès !");
  return false;
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}