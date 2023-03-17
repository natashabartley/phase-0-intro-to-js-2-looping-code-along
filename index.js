const address = {
    street1: '11 Broadway',
    street2: '2nd Floor',
    city: 'New York',
    state: 'NY',
    zipCode: "10004"
  };
  
address.key = "Let's have a 'key' key!";

for (const key in address) {
  console.log(address.key);
}