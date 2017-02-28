function Excuse() {
	
	var myDog = ['chien', 'chat', 'théorie sur pythagore', 'version de Windows', 'iguane', 'navigateur pas à jour', 'avatar', 'voisin', 'complot autour de  Matrix','artefact', 'double maléfique', 'poisson rouge', 'historique dans Google'];
	var ate = ['a écrasé', 'a remplacé', 'a effacé', 'a altéré', 'a détruit', 'a modifié irrémédiablement', 'a inversé', 'a recyclé', 'a tweeté sur ', 'a recalculé', 'a redéfini', 'a remis à jour', 'a abandonné', 'a plagié', 'a isolé', 'a volé', 'a trié aléatoirement', 'a renversé de l\'eau sur', 'a perdu', 'a mal interprété', 'a incinéré', 'a fait du tri sélectif sur', 'a caché', 'a reparamétré', 'a mis de côté', 'a mis sur eBay', 'a ajouté en favori sur Facebook', 'a mis sur SnapChat', 'a mis sur Youtube', 'a bu pendant que vous bossiez sur', 'a liké', 'a acheté sur Amazon'];
	var myHomework = ['projet', 'navigateur', 'travail', 'session', 'Excel', 'document', 'papier', 'contrat', 'tentative', 'blog', 'article', 'carte mémoire', 'aide en ligne', 'rêve d\'un monde meilleur', 'memento', 'compte-rendu', 'presentation', 'portfolio', 'commentaire'];
	
	var who = myDog[Math.round(Math.random()*(myDog.length-1))];
	var did = ate[Math.round(Math.random()*(ate.length-1))];
	var what = myHomework[Math.round(Math.random()*(myHomework.length-1))];
	
	document.getElementById('excuses').innerHTML = '<div>My ' + who + ' ' + did + '<br> my ' + what + '.</div>'
	
}
