/**
 * <div id = "parent">
 * <div id ="child">
 * <h1> im a h1 tag </h1>
 * <h2> im a h2 tag </h2>
 * </div>
 * <div id ="child2">
 * <h1> im a h1 tag </h1>
 * <h2> im a h2 tag </h2>
 * </div>
 * </div>
 * ReactElement(object) =>HTML (browser understands)
 * */ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "i'm a h1 tag"),
        React.createElement("h2", {}, "i'm a h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "i'm a h1 tag"),
        React.createElement("h2", {}, "i'm a h2 tag")
    ])
]);
//JSX
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
