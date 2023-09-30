function age(birthdate) {
  const today = new Date();
  const age = today.getFullYear() - birthdate.getFullYear() - 
              (today.getMonth() < birthdate.getMonth() || 
              (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
  return age;
}



const birthdate = new Date(2000, 2, 5); 
const ageValue = age(birthdate);
console.log(ageValue);