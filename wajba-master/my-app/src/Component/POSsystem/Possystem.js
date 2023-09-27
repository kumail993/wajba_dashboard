
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import './Possystem.css'; // Import your CSS file for styling


function App() {
  // Categories data
  const categoriesData = [
    {
      name: 'All items',
      image: 'all_items.jpg',
      description: 'Regular',
      price: 10.0,
    },
    {
      name: 'All items',
      image: 'all_items.jpg',
      description: 'Regular',
      price: 10.0,
    },
    {
      name: 'All items',
      image: 'all_items.jpg',
      description: 'Regular',
      price: 10.0,
    },
    {
      name: 'All items',
      image: 'all_items.jpg',
      description: 'Regular',
      price: 10.0,
    },
    {
      name: 'All items',
      image: 'all_items.jpg',
      description: 'Regular',
      price: 10.0,
    },
    {
      name: 'All items',
      image: 'all_items.jpg',
      description: 'Regular',
      price: 10.0,
    },
    {
      name: 'All items',
      image: 'all_items.jpg',
      description: 'Regular',
      price: 10.0,
    },
    {
      name: 'All items',
      image: 'all_items.jpg',
      description: 'Regular',
      price: 10.0,
    },
    {
      name: 'All items',
      image: 'all_items.jpg',
      description: 'Regular',
      price: 10.0,
    },
    {
      name: 'All items',
      image: 'all_items.jpg',
      description: 'Regular',
      price: 10.0,
    },
    {
      name: 'All items',
      image: 'all_items.jpg',
      description: 'Regular',
      price: 10.0,
    },
    {
      name: 'All items',
      image: 'all_items.jpg',
      description: 'Regular',
      price: 10.0,
    },
    {
      name: 'All items',
      image: 'all_items.jpg',
      description: 'Regular',
      price: 10.0,
    },
    {
      name: 'All items',
      image: 'all_items.jpg',
      description: 'Regular',
      price: 10.0,
    },
    {
      name: 'All items',
      image: 'all_items.jpg',
      description: 'Regular',
      price: 10.0,
    },
    {
      name: 'All items',
      image: 'all_items.jpg',
      description: 'Regular',
      price: 10.0,
    },
    // ... add more categories with image URLs, descriptions, and prices
  ];

  const [categories, setCategories] = useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [showOrderPopup, setShowOrderPopup] = useState(false); // State to control the order popup
  // Waiter selection state
  const [selectedWaiter, setSelectedWaiter] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Filter categories based on the search input
    const filteredCategories = categoriesData.filter((category) =>
      category.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setCategories(filteredCategories);
  };

  const handleAddItem = () => {
    if (selectedCategory && selectedWaiter) {
      // Add the selected item to the list of selected items
      setSelectedItems([...selectedItems, selectedCategory]);
      setSelectedCategory(null); // Clear the selected category after adding
    }
  };

  const handleRemoveItemFromBill = (itemToRemove) => {
    const updatedBillItems = selectedItems.filter((item) => item !== itemToRemove);
    setSelectedItems(updatedBillItems);
  };

  // Calculate the total amount of the bill
  const totalAmount = selectedItems.reduce((total, item) => total + item.price, 0);

  const handlePrintBill = () => {
    // Here, you can implement the logic to print the bill,
    // such as opening a print dialog or sending it to a printer.
    // You may need to use a library or external service for this.
    // This part depends on your specific requirements and the environment you are using.
    // For a simple alert, you can use:
    alert('Bill printed!');
  };


  const handlePlaceOrder = () => {
    if (selectedItems.length > 0 && selectedWaiter) {
      setShowOrderPopup(true); // Show the order confirmation popup
    } else {
      alert('Please select items and a waiter before placing the order.');
    }
  };

  const handleCancelOrder = () => {
    // Clear the selected items and waiter when canceling the order
    setSelectedItems([]);
    setSelectedWaiter('');
  };

  return (
    <div>
     <Grid container spacing={2} columns={16}>
  
  <Grid item xs={8}>
  <div className="search-container">
       <input
         type="text"
         placeholder="Search for a category"
         value={searchInput}
         onChange={handleSearchChange}
       />
       <button className="search-button">Search</button>
     </div>
     <div className="pos-container">
       <div className="button-container">
         {categories.map((category, index) => (
           <button
             key={index}
             className={`orange-button${selectedCategory === category ? ' active' : ''}`}
             onClick={() => handleCategoryClick(category)}
           >
             {category.name}
           </button>
         ))}
       </div>
       <div className="scrollable-image-container">
         {selectedCategory && (
           <div className="selected-category">
             <img src={selectedCategory.image} alt={selectedCategory.name} />
             <p>{selectedCategory.description}</p>
             <p>Price: ${selectedCategory.price}</p>
             <button className="add-item-button" onClick={handleAddItem}>
               Add Item
             </button>
           </div>
         )}
         {selectedCategory && (
           <div className="selected-category">
             <img src={selectedCategory.image} alt={selectedCategory.name} />
             <p>{selectedCategory.description}</p>
             <p>Price: ${selectedCategory.price}</p>
             <button className="add-item-button" onClick={handleAddItem}>
               Add Item
             </button>
           </div>
         )}
         {selectedCategory && (
           <div className="selected-category">
             <img src={selectedCategory.image} alt={selectedCategory.name} />
             <p>{selectedCategory.description}</p>
             <p>Price: ${selectedCategory.price}</p>
             <button className="add-item-button" onClick={handleAddItem}>
               Add Item
             </button>
           </div>
         )}
         {selectedCategory && (
           <div className="selected-category">
             <img src={selectedCategory.image} alt={selectedCategory.name} />
             <p>{selectedCategory.description}</p>
             <p>Price: ${selectedCategory.price}</p>
             <button className="add-item-button" onClick={handleAddItem}>
               Add Item
             </button>
           </div>
         )}
         {selectedCategory && (
           <div className="selected-category">
             <img src={selectedCategory.image} alt={selectedCategory.name} />
             <p>{selectedCategory.description}</p>
             <p>Price: ${selectedCategory.price}</p>
             <button className="add-item-button" onClick={handleAddItem}>
               Add Item
             </button>
           </div>
         )}
         {selectedCategory && (
           <div className="selected-category">
             <img src={selectedCategory.image} alt={selectedCategory.name} />
             <p>{selectedCategory.description}</p>
             <p>Price: ${selectedCategory.price}</p>
             <button className="add-item-button" onClick={handleAddItem}>
               Add Item
             </button>
           </div>
         )}
         {selectedCategory && (
           <div className="selected-category">
             <img src={selectedCategory.image} alt={selectedCategory.name} />
             <p>{selectedCategory.description}</p>
             <p>Price: ${selectedCategory.price}</p>
             <button className="add-item-button" onClick={handleAddItem}>
               Add Item
             </button>
           </div>
         )}
         {selectedCategory && (
           <div className="selected-category">
             <img src={selectedCategory.image} alt={selectedCategory.name} />
             <p>{selectedCategory.description}</p>
             <p>Price: ${selectedCategory.price}</p>
             <button className="add-item-button" onClick={handleAddItem}>
               Add Item
             </button>
           </div>
         )}
         {selectedCategory && (
           <div className="selected-category">
             <img src={selectedCategory.image} alt={selectedCategory.name} />
             <p>{selectedCategory.description}</p>
             <p>Price: ${selectedCategory.price}</p>
             <button className="add-item-button" onClick={handleAddItem}>
               Add Item
             </button>
           </div>
         )}
         {selectedCategory && (
           <div className="selected-category">
             <img src={selectedCategory.image} alt={selectedCategory.name} />
             <p>{selectedCategory.description}</p>
             <p>Price: ${selectedCategory.price}</p>
             <button className="add-item-button" onClick={handleAddItem}>
               Add Item
             </button>
           </div>
         )}
         {selectedCategory && (
           <div className="selected-category">
             <img src={selectedCategory.image} alt={selectedCategory.name} />
             <p>{selectedCategory.description}</p>
             <p>Price: ${selectedCategory.price}</p>
             <button className="add-item-button" onClick={handleAddItem}>
               Add Item
             </button>
           </div>
         )}
         {selectedCategory && (
           <div className="selected-category">
             <img src={selectedCategory.image} alt={selectedCategory.name} />
             <p>{selectedCategory.description}</p>
             <p>Price: ${selectedCategory.price}</p>
             <button className="add-item-button" onClick={handleAddItem}>
               Add Item
             </button>
           </div>
         )}
         {selectedCategory && (
           <div className="selected-category">
             <img src={selectedCategory.image} alt={selectedCategory.name} />
             <p>{selectedCategory.description}</p>
             <p>Price: ${selectedCategory.price}</p>
             <button className="add-item-button" onClick={handleAddItem}>
               Add Item
             </button>
           </div>
         )}
         {selectedCategory && (
           <div className="selected-category">
             <img src={selectedCategory.image} alt={selectedCategory.name} />
             <p>{selectedCategory.description}</p>
             <p>Price: ${selectedCategory.price}</p>
             <button className="add-item-button" onClick={handleAddItem}>
               Add Item
             </button>
           </div>
         )}
         {selectedCategory && (
           <div className="selected-category">
             <img src={selectedCategory.image} alt={selectedCategory.name} />
             <p>{selectedCategory.description}</p>
             <p>Price: ${selectedCategory.price}</p>
             <button className="add-item-button" onClick={handleAddItem}>
               Add Item
             </button>
           </div>
         )}
         {selectedCategory && (
           <div className="selected-category">
             <img src={selectedCategory.image} alt={selectedCategory.name} />
             <p>{selectedCategory.description}</p>
             <p>Price: ${selectedCategory.price}</p>
             <button className="add-item-button" onClick={handleAddItem}>
               Add Item
             </button>
           </div>
         )}
         {selectedCategory && (
           <div className="selected-category">
             <img src={selectedCategory.image} alt={selectedCategory.name} />
             <p>{selectedCategory.description}</p>
             <p>Price: ${selectedCategory.price}</p>
             <button className="add-item-button" onClick={handleAddItem}>
               Add Item
             </button>
           </div>
         )}
         {selectedCategory && (
           <div className="selected-category">
             <img src={selectedCategory.image} alt={selectedCategory.name} />
             <p>{selectedCategory.description}</p>
             <p>Price: ${selectedCategory.price}</p>
             <button className="add-item-button" onClick={handleAddItem}>
               Add Item
             </button>
           </div>
         )}
         {selectedCategory && (
           <div className="selected-category">
             <img src={selectedCategory.image} alt={selectedCategory.name} />
             <p>{selectedCategory.description}</p>
             <p>Price: ${selectedCategory.price}</p>
             <button className="add-item-button" onClick={handleAddItem}>
               Add Item
             </button>
           </div>
         )}
       </div>
     </div>
 </Grid>
 <Grid item xs={8}>
 <div className="waiter-selection">
       <label>Select Table : </label>
       <select onChange={(e) => setSelectedWaiter(e.target.value)} value={selectedWaiter}>
         <option value="">Select a Table</option>
         <option value="Waiter 1">Table 1</option>
         <option value="Waiter 2">Table 2</option>
         {/* Add more waiter options as needed */}
       </select>
     </div>
     {/* Bill Section */}
     <div className="bill-section">
       <h2>Bill</h2>
       <table>
         <thead>
           <tr>
             <th>Item</th>
             <th>Description</th>
             <th>Price</th>
             <th>Actions</th>
           </tr>
         </thead>
         <tbody>
           {selectedItems.map((item, index) => (
             <tr key={index}>
               <td>{item.name}</td>
               <td>{item.description}</td>
               <td>${item.price.toFixed(2)}</td>
               <td>
                 <button onClick={() => handleRemoveItemFromBill(item)}>Remove</button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
       <p>Total Amount: ${totalAmount.toFixed(2)}</p>
       <button className="print-bill-button" onClick={handlePrintBill}>
         Print Bill
       </button>
     </div>
     <div>
      {/* ... (previous code remains the same) */}

      {/* Buttons for placing and canceling orders */}
      <div className="order-buttons">
        <button className="place-order-button" onClick={handlePlaceOrder}>
          Place Order
        </button>
        <button className="cancel-button" onClick={handleCancelOrder}>
          Cancel
        </button>
      </div>

      {/* Order confirmation popup */}
      {showOrderPopup && (
        <div className="order-popup">
          <p>Thank you! Your order has been placed.</p>
          <button className="close-popup-button" onClick={() => setShowOrderPopup(false)}>
            Close
          </button>
        </div>
      )}
    </div>
 </Grid>
</Grid> 


    </div>
    
  );
}

export default App;



// import React, { useState } from 'react';
// import './Possystem.css'; // Import your CSS file for styling

// function App() {
//   // Categories data
//   const categoriesData = [
//     // ... (your category data)
//   ];

//   const [categories, setCategories] = useState(categoriesData);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [searchInput, setSearchInput] = useState('');
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [selectedWaiter, setSelectedWaiter] = useState('');
//   const [showOrderPopup, setShowOrderPopup] = useState(false); // State to control the order popup

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   const handleSearchChange = (e) => {
//     const inputValue = e.target.value;
//     setSearchInput(inputValue);

//     // Filter categories based on the search input
//     const filteredCategories = categoriesData.filter((category) =>
//       category.name.toLowerCase().includes(inputValue.toLowerCase())
//     );

//     setCategories(filteredCategories);
//   };

//   const handleAddItem = () => {
//     if (selectedCategory && selectedWaiter) {
//       // Add the selected item to the list of selected items
//       setSelectedItems([...selectedItems, selectedCategory]);
//       setSelectedCategory(null); // Clear the selected category after adding
//     }
//   };

//   const handleRemoveItemFromBill = (itemToRemove) => {
//     const updatedBillItems = selectedItems.filter((item) => item !== itemToRemove);
//     setSelectedItems(updatedBillItems);
//   };

//   const handlePrintBill = () => {
//     // Here, you can implement the logic to print the bill,
//     // such as opening a print dialog or sending it to a printer.
//     // This part depends on your specific requirements and the environment you are using.
//     // For a simple alert, you can use:
//     alert('Bill printed!');
//   };

//   const handlePlaceOrder = () => {
//     if (selectedItems.length > 0 && selectedWaiter) {
//       setShowOrderPopup(true); // Show the order confirmation popup
//     } else {
//       alert('Please select items and a waiter before placing the order.');
//     }
//   };

//   const handleCancelOrder = () => {
//     // Clear the selected items and waiter when canceling the order
//     setSelectedItems([]);
//     setSelectedWaiter('');
//   };

//   return (
//     <div>
//       {/* ... (previous code remains the same) */}

//       {/* Buttons for placing and canceling orders */}
//       <div className="order-buttons">
//         <button className="place-order-button" onClick={handlePlaceOrder}>
//           Place Order
//         </button>
//         <button className="cancel-button" onClick={handleCancelOrder}>
//           Cancel
//         </button>
//       </div>

//       {/* Order confirmation popup */}
//       {showOrderPopup && (
//         <div className="order-popup">
//           <p>Thank you! Your order has been placed.</p>
//           <button className="close-popup-button" onClick={() => setShowOrderPopup(false)}>
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

