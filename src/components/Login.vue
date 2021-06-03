<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-5">
            <form>
                <h2 class="text-center">Sign in</h2>
                <div class="my-3 form-group">
                    <label for="Email:">Email :</label>
                   <slot name="email" ></slot>
                </div>
                <div class="my-3 form-group">
                    <label for="password">Password :</label>
                    <slot name="password"></slot>
                </div>
                <div class="w-100 d-flex justify-content-center">
                    <slot name="button"></slot>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:"Login"
}
</script>

<style>

</style>


//slotları kullanarak üst-alt complar arasında reaktif veri kullanılır.