# Prototypes

## Table layout and keyboard navigation

The purpose of this prototype was to architect a semantic HTML table layout that could support
* toggling data cells to an editable text cell
* an expand/collapse row
* a cell with multiple controls
* keyboard navigation similar to a grid or spreadsheet and screen reader accessibility

Stretch goal was to support keyboard navigation for the editable cells as described in the [aria data-grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/examples/data-grids/) spec.

### Goals
1. Demonstrate an appropriate layout for supporting expand/collapse and multiple, editable inputs in either a single cell or multiple cells
2. Support keyboard navigation in the editable cells using up/down/left/right arrows and native tab/shift-tab

### Expectations
1. Table supports native keyboard navigation
    * Tab/Shift-Tab follows DOM focus order
    * Left/Right move focus end-to-end in the row (no wrapping)
    * Up/Right move focus top-to-bottom in the column (no wrapping)
2. Dropdown native navigation still works
    * Down arrow does not move focus out of the cell, maintains on the dropdown
3. Expanded cell does not respect up/down arrow navigation
    * Moving focus within the expanded cell requires tab/shift-tab


### Demo Video
* <a href="https://drive.google.com/file/d/17bI9G31jOisRproRTugQLD8XsfIPHyHk/view?usp=sharing" target="_blank">Demo video</a> - (Google drive)

* Prototypes
<p class="codepen" data-height="820" data-default-tab="result" data-slug-hash="XWLRbxP" data-pen-title="Table with clickable edit fields and focus manager
" data-user="Josh-Harrison" style="height: 820px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
    <span>See the Pen <a href="https://codepen.io/Josh-Harrison/pen/XWLRbxP">
    Table with clickable edit fields and focus manager
    </a> by Josh Harrison (<a href="https://codepen.io/Josh-Harrison">@Josh-Harrison</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Technical recommendations
1. “Details” column controls should be contained with a single cell, each control is assigned it’s own label
2. All focusable elements using keyboard navigation must have a unique id that indicates the row and column it resides in. Ex. `row1-col3`
    * Would be great to smartly compute these values vs hard-coding them in a map
3. All focusable elements using keyboard navigation that are not natively focusable (`th`, `td`) must have `tabindex=”-1”`
    * If the cell contains a natively focusable element (`Dropdown`, `input`, `button`, etc), do not include `tabindex=”-1”`, focus will be on the focusable element not the parent container
    * Keyboard Navigation is managed via `useKeyboardNavigation` hook to store current focus item and calculate next, previous, above, and below focus item
        * Note that there is definitely room for smartness and improvements in this hook
        * Most likely not necessary to add the ID’s to the timesheets, just need the `currFocusId` state management and the `moveFocus` helper
4. Supporting the “Click to edit” functionality, consider using a “readonly” `Input` (with custom style to look like text) vs a `button` or text with an `onClick` handler
5. The following components need `ref`’s assigned to them to manage focus via the hook:
    * `TextField` (EditableCell input) via `ref` prop
    * `Button` (EditableCell) via `innerRef` prop
    * `IconControl` (expand/collapse buttons) via `innerRef` prop
    * `Table.Cell` via `innerRef` prop
    * `Dropdown`
        * Does not support `ref`, `innerRef`, etc.
        * Wrap `Dropdown` in a `span` with assigned `ref`
        * Use `ref.current.querySelector(‘#<dropdown_id>’)` to select dropdown input and trigger focus
