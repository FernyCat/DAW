function saludar (saludarFunction) { 
    saludarFunction();
  }
  
  const saludoInternacional = function(){
    console.log('Hello World');
  }
  
  const saludoMexicano= () => {
    console.log('Quihubole!');
  }
  
  saludar(saludoInternacional);
  saludar(saludoMexicano);