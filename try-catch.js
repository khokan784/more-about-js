function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    try{
        const age = parseInt(ageText)
        if(isNaN(age)){
            throw 'please enter a number'
        }
        else if(age < 18){
            throw 'bassa not allow'
        }
        else if(age > 30){
            throw ' murubbi akane aisen na'
        }
    }
    
    catch(err){
        console.log('ERROR',err)
        errorTag.innerHTML = 'ERROR:' + err
    }
    finally{
        console.log('All done inside try and catch')
    }
    console.log(1111)
}