<script lang="ts">
    import "../styles/app.css";
    
    import Navbar from "$lib/Navbar.svelte";
</script>

<div>
    <Navbar />
    <slot />
</div>
