export function getBooks() {
  return new Promise(r => {
    setTimeout(function() {
      r([{
        id: 1,
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," 
          + " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
          + " In eu mi bibendum neque egestas congue quisque egestas." 
          + " Pellentesque eu tincidunt tortor aliquam nulla facilisi cras." 
          + " Duis at tellus at urna condimentum mattis pellentesque.",
        author: "Author 1",
        year: 2011
      }, {
        id: 2,
        title: "Neque volutpat",
        description: "Neque volutpat ac tincidunt vitae semper quis lectus." 
          + " Morbi tristique senectus et netus et malesuada fames ac turpis." 
          + " Arcu felis bibendum ut tristique et. Sagittis vitae et leo duis ut diam quam nulla."
          + " Aliquam malesuada bibendum arcu vitae elementum curabitur vitae."
          + " Odio eu feugiat pretium nibh ipsum consequat nisl vel. In est ante in nibh."
          + " Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada."
          + " Eu ultrices vitae auctor eu augue. Semper feugiat nibh sed pulvinar proin gravida.",
        author: "Author 2",
        year: 2015
      }, {
        id: 3,
        title: "Maecenas accumsan",
        description: "Maecenas accumsan lacus vel facilisis volutpat est."
          + " Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam."
          + " Vitae suscipit tellus mauris a diam maecenas. Arcu non sodales neque sodales ut etiam sit amet nisl."
          + " Venenatis lectus magna fringilla urna porttitor. Egestas quis ipsum suspendisse ultrices gravida dictum."
          + " At lectus urna duis convallis convallis tellus. Vel eros donec ac odio tempor.",
        author: "Author 3",
        year: 2007
      }, {
        id: 4,
        title: "Venenatis",
        description: "Venenatis a condimentum vitae sapien pellentesque." 
          + " Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed."
          + " A scelerisque purus semper eget duis at tellus at."
          + " Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam."
          + " In massa tempor nec feugiat nisl pretium. Vel pharetra vel turpis nunc eget lorem dolor sed.",
        author: "Author 4",
        year: 2010
      }, {
        id: 5,
        title: "Fermentum dui faucibus",
        description: "Fermentum dui faucibus in ornare quam."
        + " Eu sem integer vitae justo eget magna fermentum."
        + " Malesuada proin libero nunc consequat interdum varius sit amet mattis."
        + " Tellus molestie nunc non blandit massa enim nec."
        + " Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu."
        + " Justo donec enim diam vulputate ut pharetra."
        + " Mauris sit amet massa vitae tortor condimentum lacinia.",
        author: "Author 5",
        year: 2019
      }])
    }, 3000);
  });
}