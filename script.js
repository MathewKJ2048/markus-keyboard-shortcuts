// ==UserScript==
// @name     Markus Keyboard Shortcuts
// @version  1
// @match        https://markus.student.cs.uwaterloo.ca/markus*
// @grant    none
// ==/UserScript==


(function() {
    'use strict';
    console.log("userscript active")
  
  	window.addEventListener('keydown', function(e) {
    if ((e.shiftKey || e.ctrlKey) && 
        ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
    }
}, true);
  

    function next()
{
	let right_URI = document.getElementById("student_selector").children[2].children[0].href
  if(right_URI) window.location.assign(right_URI)
  else alert("last file")
}
function prev()
{
	let left_URI = document.getElementById("student_selector").children[0].children[0].href
	if(left_URI) window.location.assign(left_URI)
  else alert("first file")
}
function change_box_event(t)
{
	t.dispatchEvent(new Event('change', { bubbles: true }));
}
function select_prev(el)
  {
	const n = el.options.length
    let i = el.selectedIndex
	if(i === 0)
	{
		console.log("first in list")
		return
	}
	el.selectedIndex = i-1;
	change_box_event(el)
  }
  function select_next(el)
  {
	const n = el.options.length
    let i = el.selectedIndex
	if(i === n-1)
	{
		console.log("last in list")
		return
	}
	el.selectedIndex = i+1;
	change_box_event(el)
  }
function file_next()
  {
    const el = document.getElementById("select_file_id")
    select_next(el)
  }
 function file_prev()
  {
	const el = document.getElementById("select_file_id")
    select_prev(el)
  }
  function state_prev()
  {
	const el = document.getElementById('marking_state')
	select_prev(el)
  }
  function state_next()
  {
	const el = document.getElementById('marking_state')
	select_next(el)
  }
    document.addEventListener('keydown', function(event) {
      
        if (event.key === 'ArrowRight' && event.ctrlKey) {
            next();
        }
        else if (event.key === 'ArrowLeft' && event.ctrlKey) {
            prev();
        }
      	else if (event.key === 'ArrowDown' && event.ctrlKey)
        {
          file_next()
        }
		else if (event.key === 'ArrowUp' && event.ctrlKey)
        {
          file_prev()
        }
		else if (event.key === '/' && event.ctrlKey)
		{
			const el = document.getElementById("mark_criteria")
			el.querySelectorAll("input")[0].focus()
      		event.preventDefault()
		}
		else if (event.key === '.' && event.ctrlKey)
		{
			state_next()
		}
		else if (event.key === ',' && event.ctrlKey)
		{
			state_prev()
		}
		
     
      	
    });

})();

