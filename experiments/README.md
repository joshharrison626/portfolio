# Experiments

## Table vs List architecture
The purpose of this activity was to experiment and prove a new architecture for an old feature that was being updated. The old feature displayed a list of workers and metadata describing the worker's activities. The list was not built for accessibility and did not meet HTML spec standards for a table or list layout.

My objective was to prove whether the "list" should be built as an HTML list (suggested by our accessibility leader) or as an HTML table (suggested by our customer).

The result of this experiment was to build the feature following the table spec, using CSS grid to modify the visual alignment of the cells to look like the list.

### Resources
* <a href="https://drive.google.com/drive/folders/1WedV6mHOJz8qZwm2LR2d6LPAyj8XiNeN?usp=sharing" target="_blank">Experiment videos</a> - (Google Drive)

### Examples

<div class="container-row">
    <div class="experiment-image-container">
        <h3>Description List</h3>
        <img src="../assets/images/description_list.png">
    </div>
    <div class="experiment-image-container">
        <h3>Ordered List</h3>
        <img src="../assets/images/ordered_list.png">
    </div>
    <div class="experiment-image-container">
        <h3>Semantic Table</h3>
        <img src="../assets/images/semantic_table.png">
    </div>
    <div class="experiment-image-container">
        <h3>Styled Table</h3>
        <img src="../assets/images/styled_table.png">
    </div>
</div>
