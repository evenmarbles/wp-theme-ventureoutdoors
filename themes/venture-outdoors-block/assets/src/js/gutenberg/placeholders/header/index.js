wp.blocks.registerBlockType("vo-blocks/header", {
  title: "Venture Outdoors Header",
  icon: "editor-outdent",
  category: "ventureoutdoors",

  edit() {
    return wp.element.createElement(
      "div", 
      { className: "vo-placeholder-block" }, 
      "Header Placeholder"
    )
  },

  save() {
    return null
  }
})