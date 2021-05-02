<script>
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }
</script>
<?php
    $current_data = file_get_contents('data.json');
$array_data = json_decode($current_data, true);
$extra = array(
    'date' => date('m/d'),
    'Time' => date('H:i'),
    'wph' => $_GET['wph']
);
$array_data[] = $extra;
$final_data = json_encode($array_data);
file_put_contents('data.json', $final_data);
$finalized_rawjson = file_get_contents('data.json');
$finalized_json = json_decode($finalized_rawjson, true);
print_r($finalized_json);

?>
<form action="" method="post">
    <p>
        <label for="inputWph">Wph:<sup>*</sup></label>
        <input type="text" name="wph" id="inputWph">
    </p>
    <p>
        <input type="submit">
    </p>


</form>