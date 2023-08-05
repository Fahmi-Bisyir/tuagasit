const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    // Mengambil nilai input nama dan email
    var name = formData.get('name');
    var email = formData.get('email');

    var kata = formData.get('pesan');
    
""
    // Mengambil nilai hobi (dalam bentuk array)
    var hobbies = formData.getAll('hobby');

    console.log('Nama:', name);
    console.log('Email:', email);
    console.log('Hobi:', hobbies);
    console.log('message:', kata);
});
