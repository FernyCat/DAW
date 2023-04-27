window.onload = function () {
    
    var images = document.querySelectorAll(".artThumb");
    for (var i = 0; i < images.length; i++) {
	images[i].onmouseover = function() {
	    var newNode = document.createElement("img");
	    var oldsrc=this.src;
	    var parts=oldsrc.split("/");
	    var newsrc="images/" + parts[parts.length-1];
		console.log(newsrc);
		newNode.src = newsrc;
		newNode.style = "border:solid 3px black; width:100px; height:90px;";
	    newNode.className='bigImg';
	    this.parentNode.appendChild(newNode);
	    console.log(this.src);
	}
	images[i].onmouseout = function(){
	    var images = document.querySelectorAll(".bigImg");
	    for (var i=0; i < images.length; i++){
		images[i].parentNode.removeChild(images[i]);
	    }
	}
    }
}

window.addEventListener('load', function() {
	var filterButton = document.querySelector('#set input[type="submit"][value="Filtrar"]');
	var genreSelect = document.querySelector('#set select[name="filter"]');
	var rows = document.querySelectorAll('#art-table tbody tr');
  
	filterButton.addEventListener('click', function(event) {
	  event.preventDefault();
	  var selectedIndex = genreSelect.selectedIndex;
	  var selectedGenre = genreSelect.options[selectedIndex].text;
	  for (var i = 0; i < rows.length; i++) {
		var genreCell = rows[i].querySelectorAll('td')[5];
		var genre = genreCell.textContent;
		if (selectedGenre === 'Género' || selectedGenre === genre) {
		  rows[i].style.display = '';
		} else {
		  rows[i].style.display = 'none';
		}
	  }
	});
  });
  
// Obtener los botones de editar
const editButtons = document.querySelectorAll('button');

// Agregar un controlador de eventos a cada botón de editar
editButtons.forEach((button) => {
  button.addEventListener('click', () => {

    // Obtener los detalles del elemento seleccionado
    const row = button.parentNode.parentNode;
    const title = row.querySelector('td:nth-child(3)').textContent;
    const artist = row.querySelector('td:nth-child(4)').textContent;
    const year = row.querySelector('td:nth-child(5)').textContent;
    const genre = row.querySelector('td:nth-child(6)').textContent;
    const imageSrc = row.querySelector('img').getAttribute('src');

    // Crear el elemento de fondo oscuro
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // Crear el contenido del cuadro de diálogo modal
    const modalContent =  `
    <div class="modal-header">
    <h2>Editar</h2><br/>
    <button class="close">&times;</button>
  </div>
  <div class="modal-body">
    <img src="${imageSrc}" alt="${title}" class="artwork">
    <div class="cuadros">
    <input type="text" id="title" name="title" value="${title}"></br>
    <input type="text" id="artist" name="artist" value="${artist}"><br/>
    <input type="text" id="year" name="year" value="${year}"><br/>
    <input type="text" id="genre" name="genre" value="${genre}"><br/>
    </div>
  </div>
    `;

    // Crear el cuadro de diálogo modal y agregarlo al DOM
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = modalContent;
    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    // Agregar controladores de eventos a los botones del cuadro de diálogo modal
    const cancelButton = modal.querySelector('.close');
    cancelButton.addEventListener('click', () => {
      modal.remove();
      overlay.remove();
    });
  });
});


  
