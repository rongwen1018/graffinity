import {SvgGroupElement} from "./../svgGroupElement"
import {visHistogramScent} from "../../vis/visHistogramScent.js"

/**
 * Class that displays quantitative attributes row/col controls.
 *
 * This is responsible for:
 * 1. notifying the matrix when user clicks on the filter, hide, and sort buttons;
 * 2. creating a 'scent' to give the user an overview of values in the rows/cols
 * 3. updating the scent when user filters on attributes
 *
 */
export class cmAttributeControls extends SvgGroupElement {

  /**
   * Creates the grid cell to handle user input.
   * 1. Saves relevant callbacks for d3 events.
   * 2. Creates this.label - contains displayed name
   * 3. Creates this.scent - will contain a scented histogram of the data
   * 4. Creates an 'interaction rect' for handling mouse hover events and exposing filter, sort, hide, etc..
   */
  constructor(parent, name, isVertical, width, height, onSort, onHide, index, onFilter, filterNodeIndexes,
              filterAttributeGroup, attributeValues) {
    super(parent);
    let group = this.getGroup();
    if (isVertical) {
      group.attr("transform", "translate(" + width + ", " + 0 + ")");
    } else {
      group.attr("transform", "translate(" + 0 + ", " + height + ")");
    }

    this.width = width;
    this.height = height;

    this.name = name;

    // Callback for hiding matrix row/col
    this.onHide = onHide;
    this.index = index; // the row/col index

    // Callback for sorting
    this.onSort = onSort;
    this.sortAscending = false; // toggled on user click

    // Callback for filtering - nodeIndexes and attributeGroup are needed by callback.
    this.onFilter = onFilter;
    this.filterNodeIndexes = filterNodeIndexes;
    this.filterAttributeGroup = filterAttributeGroup;

    // List of attribute values to be displayed in the scent
    this.attributeValues = attributeValues;

    // The "isVertical" boolean is kind of annoying.
    // It is true if this controls a *row* of attributes. Otherwise it is false.

    // Note - the label gets rotated if this isVertical.
    this.label = cmAttributeControls.createLabel(group, name, isVertical, width, height);

    this.scent = this.createDataScent(group, isVertical, attributeValues);

    // This must be called last for z-ordering of svg elements.
    this.createInteractionRect(group, isVertical, width, height);
  }

  createDataScent(group, isVertical, attributeValues) {

    let scentHeight = null;
    let scentWidth = null;
    let scentGroup = null;
    let offset = parseInt(this.label.style("line-height"));

    if (isVertical) {
      scentHeight = this.height;
      scentWidth = this.width - offset;

      scentGroup = group.append("g")
        .attr("transform", "translate(" + offset + ",0)");
    } else {
      scentHeight = this.height - offset;
      scentWidth = this.width;

      scentGroup = group.append("g")
        .attr("transform", "translate(0, " + offset + ")");
    }

    return new visHistogramScent(this.$scope, scentGroup, scentWidth, scentHeight, 10, isVertical, attributeValues);
  }


  /**
   * Creates rectangle that appears on mouse hover for displaying the filter, hide, and sort controls.
   */
  createInteractionRect(group, isVertical, width, height) {
    let self = this;

    if (isVertical) {
      group = group.append("g")
        .attr("transform", "translate(0" + ", " + height + ")rotate(270)");
    }

    let mouseLeave = function () {
      self.toggleControlVisible(false);
    };

    let mouseEnter = function () {
      self.toggleControlVisible(true);
    };

    this.outline = group.append("rect")
      .attr("width", isVertical ? height : width)
      .attr("height", isVertical ? width : height)
      .classed("matrix-view-attribute-controls", true)
      .on("mouseenter", mouseEnter)
      .on("mouseleave", mouseLeave);


    this.controls = group.append("foreignObject")
      .append('xhtml:div')
      .classed("matrix-view-toolbar", true)
      .on("mouseover", mouseEnter)
      .on("mouseleave", mouseLeave);

    this.controls.append("i")
      .classed("fa", true)
      .classed("fa-filter", true)
      .attr("float", "left")
      .on("click", function () {
        self.onFilter(self.name, self.filterNodeIndexes, self.filterAttributeGroup);
      });

    this.controls.append("i")
      .classed("fa", true)
      .classed("fa-sort", true)
      .attr("float", "left")
      .on("click", function () {
        self.onSort(self.name, self.sortAscending);
        self.sortAscending = !self.sortAscending;
      });

    if (this.onHide) {
      this.controls.append("i")
        .classed("fa", true)
        .classed("fa-close", true)
        .attr("float", "left")
        .on("click", function () {
          self.onHide(self.index, false);
        });
    }
  }

  /**
   * Creates text label. The isVertical label will be rotated 270 degrees.
   */
  static createLabel(group, name, isVertical, width, height) {
    if (isVertical) {
      return group.append("text")
        .text(name)
        .attr("transform", "translate(" + 0 + " ," + height / 2 + ")rotate(270)")
        .classed("matrix-view-attribute-label", true)
    } else {
      return group.append("text")
        .attr("transform", "translate(" + width / 2 + "," + 0 + ")")
        .text(name)
        .classed("matrix-view-attribute-label", true)
    }
  }


  /**
   * Updates the filter displayed in the scent.
   */
  setAttributeFilterRange(filterRange) {
    this.scent.setFilterRange(filterRange)
  }

  /**
   * Called when mouse is on top of the interaction rect.
   */
  toggleControlVisible(visible) {
    this.outline.attr("stroke", visible ? "black" : "none");
    this.controls.style("display", visible ? "block" : "none");
  }
}


export class cmCategoricalAttributeControls extends cmAttributeControls {
  constructor(parent, name, isVertical, width, height, onSort, onHide, index, onFilter, filterNodeIndexes,
              filterAttributeGroup, attributeValues) {
    super(parent, name, isVertical, width, height, onSort, onHide, index, onFilter, filterNodeIndexes,
      filterAttributeGroup, attributeValues);
  }

  /**
   * No-op
   */
  // createDataScent(group, isVertical, attributeValues)
  createDataScent() {

  }


}
