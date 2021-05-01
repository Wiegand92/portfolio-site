import { readable } from 'svelte/store';
import database from './firebase';

// This array will hold data for all of my projects //

const projects = readable([], set => {
  
  database.ref('projects').on('value', snapshot => {
    const data = snapshot.val();
    set(data);
  });
	
});

export {projects};