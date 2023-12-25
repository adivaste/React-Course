
        // === 1. Simple Way to create element using the Javascript ===

        //const element = document.createElement("h1");
        //element.innerHTML = "Hello React";

        // const root = document.getElementById("root");
        //root.appendChild(element);


        // === 2. Create Element using the Pure React ===

        // const heading = React.createElement("h1", {
        //    id:"heading",
        //    className:"element"
        // }, "Namaste Everyone!");
        //const root = ReactDOM.createRoot(document.getElementById("root"));
        //root.render(heading);
        //console.log(heading);

        // === 3. Creating complex and nested stuff ===
        //const head1 = React.createElement("h1", {}, "Heading 1");
        //const head2 = React.createElement("h1", {}, "Heading 2");

        //const container = React.createElement("div", {id: "container"}, [head1, head2]);
        //root.render(container)
        
    
        // === 3. Practice pure react using more strcutures ===
        // * Creating a unordered list of subject and toppers 
        const subject1Std1 = React.createElement("li", {key:"std1", className:"student"}, "Aditya Vaste");
        const subject1Std2 = React.createElement("li", {key:"std2", className:"student"}, "Rohan Kumar");
        const subject1Std3 = React.createElement("li", {key:"std3", className:"student"}, "Ajay Pradhan");

        const subject1 = React.createElement("ul", {}, [subject1Std1, subject1Std2, subject1Std3]);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(subject1);
