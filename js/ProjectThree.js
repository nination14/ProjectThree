// /**************************************
//  TreeHouse Techdegree:
//  Project Three: Interactive Form
//  Coder: Ahirina Rivera
//  Start: 7/3/2019
//  End: 7/12/2019
//  **************************************/

		/** JOB ROLE SECTION ***/

    //Put the first field in the 'focus' state
    $(document).ready(function() {
        $('#name').focus();	
      
        $('#other-title').hide();  //Add other option to the job role section
      $('#title').on('click', function(e) {
      
      if ($('#title').val() == "other") {
      $("#other-title").show().focus();    
      } else {
      $("#other-title").hide();
      }
      });
      
      /*** T-SHIRT SECTION ***/
      
      var pickShirt = false;		// Assign variable
      
      $('#design option:first').hide(); {//hide the "Select Theme" option 
      $('#colors-js-puns').hide();  //hide the colors in the "Color" drop down menu
      }
          
      $('#design').change(function(){ // When design is choosen function // Listens for change & triggers the change event
      if ($(this).val() === "js puns") { // If 'js puns' is choosen then show the corresponding colors // used .this refering to the owner of method
          $('#colors-js-puns').show();    // Get the HTML contents of the first element in the set of matched elements  
          $('#color').html('<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option><option value="gold">Gold (JS Puns shirt only)</option>');
          pickShirt = true;  
          return pickShirt;
      } else if ($(this).val() === "heart js") { 
          $('#colors-js-puns').show();
          $('#color').html('<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option><option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>');
          pickShirt = true;
          return pickShirt;
      } else {
          $('colors-js-puns').hide();
          pickShirt = false;
          return pickShirt
          
      }
      });    
      
          /*** ACTIVITIES ***/
        
        // variables for the clickedBox function
        var jsf = $("input[name='js-frameworks']")
        var express = $("input[name='express']")
        var jsl = $("input[name='js-libs']")
        var node0 = $("input[name='node']")
        var btools = $("input[name='build-tools']")
        var npm = $("input[name='npm']")
        var all = $("input[name='all']")
         
        // clickedBox function watches the state of the activities selected
        
        function clickedBox() {
        $total = 0 // Starts off at zero total
        if (jsf.is(':checked')) { // Whens it gets checked 
            $total += 100 //Add 100 when checked
        express.prop('disabled', true); //If j s-frameworks is selected it to disable the express option
        } else { // do not disable express if js-frameworks wasnt selected
        express.prop('disabled', false); // Get the value of a property for the first element in the set of matched elements
        } if (express.is(':checked')) {
            $total += 100  
        jsf.prop('disabled', true) 
        } else { 
        jsf.prop('disabled', false);
        } if (jsl.is(':checked')) {
        $total +=  100
        node0.prop('disabled', true); 
        } else { 
        node0.prop('disabled', false);
        } if (node0.is(':checked')) {
        $total += 100  
        jsl.prop('disabled', true) 
        } else {
          jsl.prop('disabled', false);
        } if (btools.is(':checked')) {  
            $total += 100  
        } if (npm.is(':checked')) {  
            $total += 100}
        if (all.is(':checked')) { $total += 200  }
            $('.totalDiv').removeClass('is-hidden');  
            $('.total-display').html('Total: $' + parseInt($total)); 
            };
             
       jsf.add(express).add(jsl).add(node0).add(btools).add(npm).add(all).on('click', clickedBox);
       
      $('.activities').append('<div class="totalDiv"><label name="total-amount" class="total-display">Total: </label></div>');
      $('.totalDiv').addClass('is-hidden'); 
        
      $(".credit-card").hide(); // hides all the options before a selection
      $("p:first").hide();
      $("p:last").hide()
      
      /** PAYMENT INFO SECTION ***/
      
      $("select#payment option[value='credit card']").attr("selected", "selected"); // makes the credit card option a default
      $(".credit-card").show() // shows the creditcard as payment default
      $('#payment').on("change", function () {
      if ($(this).val() == 'credit card') { // if they select value is credit card show the credit card information
      $(".credit-card").show(); 
      } else {                    // If not hide credit card 
      $(".credit-card").hide(); 
      } if ($(this).val() == 'paypal') { 
      $("p:first").show()
      } else {
      $("p:first").hide() 
      } if ($(this).val() == 'bitcoin') { 
      $("p:last").show()
      } else {
      $("p:last").hide() 
      }
      })
      });                             
      
      /*** FORM VALIDATION MESSAGES ***/
      
      let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; // valid email regex code
      
      
      const validName = () => { //Name field can't be blank
        let $nameInput = $('#name'); //Assigns name text input a id of #name
        let validName = $nameInput.val(); //Assigs the name text to validate its value
        if(validName) {
        $nameInput.removeClass('invalid').addClass('valid'); // Removes one or more class names from the selected elements.
       return true;
        } else {
        $nameInput.removeClass('valid').addClass('invalid'); //Error message
        $nameInput.after("<span class = 'err_msg' style='color:red'>Enter a valid name</span>"); // Inserts a set of Node or DOMString objects in the children list of this ChildNode's parent & creates text box
        return false;
        }
        }
      
        const validEmail = () => { 
        let $emailInput = $('#mail');
        
        let validEmail = regex.test($emailInput.val());
        if (validEmail) {
        $emailInput.removeClass('invalid').addClass('valid');
        return true;
        } else if ($emailInput.val() !== '') { 
        $emailInput.removeClass('valid').addClass('invalid');
        $emailInput.prev().text('Enter valid email').css('color', 'red');
        return false;
        } else {
        $emailInput.removeClass('valid').addClass('invalid');
        $emailInput.after("<span class = 'err_msg' style='color:red'>Enter a valid email</span>"); 
      
        return false;
        }
        }
        const validCreditCard = () => {
        let $ccNumber = $('#cc-num');
        let regex = /^\d{13,16}$/; //13 to 16 digits for cc number
        let validCc = regex.test($ccNumber.val());
        if (validCc) {
        $ccNumber.removeClass('invalid').addClass('valid');
        $ccNumber.prev().text('Card Number:').css('color', 'black');
        return true;
        } else {
        $ccNumber.removeClass('valid').addClass('invalid');
        $ccNumber.after("<span class = 'err_msg' style='color:red'>Enter a valid credit card</span>"); 
      
        return false;
        }
        }
        const validZipCode = () => {
        let $zipCode = $('#zip')
        let regex = /\d{5}/; //5 digits for zip code
        let validZip = regex.test($zipCode.val());
        if (validZip) {
        $zipCode.removeClass('invalid').addClass('valid');
        $zipCode.prev().text('Zip Code:').css('color', 'black');
        return true;
        } else {
        $zipCode.removeClass('valid').addClass('invalid');
        $zipCode.after("<span class = 'err_msg' style='color:red'>Enter a valid name</span>"); // error messsage
      
        return false;
        }
        }
        const validCvv = () => {
        let $cvv = $('#cvv');
        let regex = /\d{3}/;
        let validCvv = regex.test($cvv.val());
        if (validCvv) {
        $cvv.removeClass('invalid').addClass('valid');
        $cvv.prev().text('CVV:').css('color', 'black');
        return true;
        } else {
        $cvv.removeClass('valid').addClass('invalid');
        $cvv.after("<span class = 'err_msg' style='color:red'>Enter a valid name</span>"); // error message
      
        return false;
        }
        }
        //making sure an activity is checked
        const validActivities = () => {
        let $activityInput = $('.activities input:checked');
        let $activityLegend = $('.activities legend');
        if ($activityInput.length > 0) {
        $activityLegend.text('Register for Activities:').css('color', 'black');
        return true;
        } else {
        $activityLegend.text('Please Select an Activity').css('color', 'red');
        return false;
        }
        }
        $('form').on('submit', function(e){ //Making the form submit and validate all the variables above
            $('.err_msg').remove();
        if ($('#payment').val() === 'credit card') {
        if(validName() & validEmail() & validActivities() & validCreditCard() & validCvv() & validZipCode()) {
        alert('Thanks For Registering!!!'); 
        return true;
        } else { // If all the fields need to be filled out correctly it will alert you
        e.preventDefault();
        alert('Pleae Fill Out Required Fields!!!');
        }
        }
        });
      
      
      
      