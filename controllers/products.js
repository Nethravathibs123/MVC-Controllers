const products = []; // Array to store products

// GET request to render the Add Product page
exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

// POST request to handle adding a product
exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/'); // Redirect to the homepage after adding product
};

// GET request to render the Shop page
exports.getProducts = (req, res, next) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
};

// GET request to render the Contact Us page
exports.getContact = (req, res) => {
  res.render('contactus', {
    pageTitle: 'Contact Us',
    path: '/contact' // Set the path for navigation
  });
};

// POST request to handle form submission from Contact Us page
exports.postContact = (req, res) => {
  const { name, email, phone, date, time } = req.body;

  console.log(`Contact Form Submitted - Name: ${name}, Email: ${email}, Phone: ${phone}, Date: ${date}, Time: ${time}`);
  
  res.redirect('/success'); // Redirecting after form submission
};

// GET request to display success message
exports.getSuccess = (req, res) => {
  res.send('<h1>Form Successfully Filled</h1><p>Thank you for booking a call. Our representative will contact you shortly.</p><a href="/">Return to Home</a>');
};
