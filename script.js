const peopleList = [
    { name: 'John Doe', age: 30, occupation: 'Engineer' },
    { name: 'Jane Smith', age: 25, occupation: 'Teacher' },
    { name: 'Bob Johnson', age: 40, occupation: 'Doctor' },
    { name: 'John Doe', age: 30, occupation: 'Engineer' },
    { name: 'Jane Smith', age: 25, occupation: 'Teacher' },
    { name: 'Bob Johnson', age: 40, occupation: 'Doctor' },
    { name: 'John Doe', age: 30, occupation: 'Engineer' },
    { name: 'Jane Smith', age: 25, occupation: 'Teacher' },
    { name: 'Bob Johnson', age: 40, occupation: 'Doctor' },
    { name: 'John Doe', age: 30, occupation: 'Engineer' },
    { name: 'Jane Smith', age: 25, occupation: 'Teacher' },
    { name: 'Bob Johnson', age: 40, occupation: 'Doctor' },
    { name: 'John Doe', age: 30, occupation: 'Engineer' },
    { name: 'Jane Smith', age: 25, occupation: 'Teacher' },
    { name: 'Bob Johnson', age: 40, occupation: 'Doctor' },
    { name: 'John Doe', age: 30, occupation: 'Engineer' },
    { name: 'Jane Smith', age: 25, occupation: 'Teacher' },
    { name: 'Bob Johnson', age: 40, occupation: 'Doctor' },
    { name: 'John Doe', age: 30, occupation: 'Engineer' },
    { name: 'Jane Smith', age: 25, occupation: 'Teacher' },
    { name: 'Bob Johnson', age: 40, occupation: 'Doctor' },
    { name: 'John Doe', age: 30, occupation: 'Engineer' },
    { name: 'Jane Smith', age: 25, occupation: 'Teacher' },
    { name: 'Bob Johnson', age: 40, occupation: 'Doctor' },
    { name: 'John Doe', age: 30, occupation: 'Engineer' },
    { name: 'Jane Smith', age: 25, occupation: 'Teacher' },
    { name: 'Bob Johnson', age: 40, occupation: 'Doctor' },
    { name: 'John Doe', age: 30, occupation: 'Engineer' },
    { name: 'Jane Smith', age: 25, occupation: 'Teacher' },
    { name: 'Bob Johnson', age: 40, occupation: 'Doctor' },
  ];
  
  function ObjecList() {
    const detls = document.getElementById('detls');
    let html = ''
  
   
    for (let i = 0; i < peopleList.length; i++) {
      const person = peopleList[i];
      html = html + `<p>Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation}</p> `;
    }

    detls.innerHTML = html;
  }
  
  
  ObjecList();



  