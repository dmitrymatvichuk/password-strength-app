## Task: Create an Application to Test Password Strength

### Objective

Create a password input field with three sections below it to display the strength of the password. The password strength indicator should update in real-time as the user types.

### Requirements

#### Password Input Field

- A field for users to input their password.

#### Sections for Displaying Password Strength

- Three sections located directly below the password input field.
- The color of each section will change based on the strength of the password.

### Password Strength Calculation

1. **Weak Password**
   - Contains only letters, digits, or symbols.

2. **Medium Password**
   - Contains a combination of:
     - Letters and symbols
     - Letters and digits
     - Digits and symbols

3. **Strong Password**
   - Contains letters, symbols, and digits.

### Color Indication

1. **Empty Field**
   - All sections are gray.

2. **Password Less Than 8 Characters**
   - All sections are red.

3. **Weak Password**
   - The first section is red.
   - The remaining two sections are gray.

4. **Medium Password**
   - The first and second sections are yellow.
   - The third section is gray.

5. **Strong Password**
   - All sections are green.
