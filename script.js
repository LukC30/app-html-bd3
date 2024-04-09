//tanka o htmlil 


db.collection("libre-firestore").get()
    .then(
        (response)=>{
            console.log(response.docs)
            response.docs.forEach(doc => {
                console.log(doc.data())
            });
        }
    )

