/**
 * Returns true if class list of given element includes 'hide'
 * @param {String} ele 
 * @returns Boolean
 */
function isIdHidden(ele) {
    let ele1 = document.getElementById(ele);
    return ele1.classList.contains('hide');
}


/**
 * Returns an element or an array of elements 
 * @param {String} by (get element by)
 * @param {String} name (name of element )
 * @returns 
 */
function getElement(by, name) {
    switch(by) {
        case 'id':
            return document.getElementById(name);
        case 'class':
            return document.getElementsByClassName(name);
        case 'tag':
            return document.getElementsByTagName(name);
    }
}


/**
 * Returns an Array of Arrays of elements
 * @param {Array of string element names e.g h1} arr 
 * @param {String - get elements by} by 
 * @returns Array
 */
function getArrayOfElements(arr, by) {
    let elements = [];
    
    for(let e of arr) {
        elements.push(getElement(by, e))
    }

    return elements;
}


/**
 * Toggle the 'hide' class on and off for given element
 * @param {HTMLElement} ele 
 */
function toggleClass(ele, classItem) {
    ele.classList.toggle(classItem);
}


/**
 * Toggle the 'hide' class on and off for given ID
 * @param {string} ele 
 */
function showHideID(name) {
    // Get element by ID
    ele = getElement('id', name);

    // Now set value
    toggleClass(ele, 'hide');
}


/**
 * Toggle the 'hide' class on and off for given each element with given class
 * @param {string} ele 
 */
function showHideClass(name) {
    // Get collection of elements
    let elements = getElement('class', name);

    //Set value for each element identified
    for(let ele of elements) {
        toggleClass(ele, 'hide');
    }
}


/**
 * Removes the old class from given array of elements, and adds the new class to each
 * @param {Array} ele 
 * @param {String} oldClass 
 * @param {String} newClass 
 */
function swapClass(ele, oldClass, newClass) {
    for(let e of ele) {
        for(let ele1 of e) {
            ele1.classList.remove(oldClass);
            ele1.classList.add(newClass);
        }
    }
}


function swapClassByID(ele, oldClass, newClass) {
    let elements = getArrayOfElements(ele, 'id');

    swapClass(elements, oldClass, newClass);
}


function swapClassByClassName(ele, oldClass, newClass) {
    let elements = getArrayOfElements(ele, 'class');

    swapClass(elements, oldClass, newClass);
}


function swapClassByTag(ele, oldClass, newClass) {
    let elements = getArrayOfElements(ele, 'tag');

    swapClass(elements, oldClass, newClass);
}