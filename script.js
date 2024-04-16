//tanka o htmlil 
const list = document.querySelector('#book-list');

function renderBook(doc) {

    //Criação de elementos html
    let li = document.createElement('li');
    let titulo = document.createElement("span");
    let autor = document.createElement("span");

    //Carrega os dados dos elementos html
    li.setAttribute('data-id', doc.id);
    titulo.textContent = doc.data().titulo;
    autor.textContent = doc.data().autor;

    //adicionando xd

    li.appendChild(titulo)
    li.appendChild(autor)

    list.appendChild(li)

}

db.collection("libre-firestore").get()
    .then(
        (response) => {
            console.log(response.docs)
            response.docs.forEach(doc => {
                renderBook(doc);

            });
        }
    )


/*vai tomar no cu piranha*/

const form = document.querySelector('#add-book-form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    db.collection('libre-firestore').add({
        autor: form.autor.value,
        titulo: form.livro.value
    }).then(()=>{
        form.autor.value = ""
        form.livro.value = ""
        window.location.reload();
    })


})
