<script lang="ts">
    import { writable } from "svelte/store";
    import { qr } from "@svelte-put/qr/img";

    let userData = writable({
        name: "",
        IDNr: "",
        Role: "",
    });

    let fixedUserData = writable({
        name: "",
        IDNr: "",
        Role: "",
    });

    const roles = ["Security", "Artist", "Photographer", "Crew"]

    let hideImg = true;

    const handleSubmit = () => {
        fixedUserData.update((data) => {
            data.name = $userData.name;
            data.IDNr = $userData.IDNr;
            data.Role = $userData.Role;
            return data;
        });
        hideImg = false;  
    };
    

    const downloadImg = () => {
        const imgsrc = document.getElementById("qr-code") as HTMLImageElement;
        if (!imgsrc) return;
        const downloadLink = document.createElement("a");
        downloadLink.href = imgsrc.src;
        downloadLink.download = "somefile.png";
        downloadLink.click();
    };
</script>

<form class="flex-col" on:submit|preventDefault={() => handleSubmit()}>
    <div class=" flex justify-center my-12">
        <div class="grid grid-cols-2 gap-4">
            <input
                type="text"
                placeholder="Name"
                class="bg-gray-700 text-white border-2 border-white rounded-md p-2"
                bind:value={$userData.name}
                required
            />
            <input
                type="number"
                placeholder="ID Nr."
                class="bg-gray-700 text-white border-2 border-white rounded-md p-2"
                bind:value={$userData.IDNr}
                required
            />
            <select
                class="bg-gray-700 text-white border-2 border-white rounded-md p-2"
                bind:value={$userData.Role}
                required>
                <option value="" disabled>Choose Role</option>
                {#each roles as role}
                    <option value={role}>{role}</option>
                {/each}
        </select>
            <button class="bg-white p-2 rounded-md" type="submit" >Generate</button>
        </div>
    </div>
    <div class=" flex justify-center" >
        <div class="h-48 w-48 bg-white flex justify-center place-items-center rounded-md" >
            <img hidden={hideImg}
                use:qr={{
                    data: `${$fixedUserData.name} ${$fixedUserData.IDNr} ${$fixedUserData.Role}`,
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Berufsbildungsschule_Winterthur_logo.svg/1200px-Berufsbildungsschule_Winterthur_logo.svg.png",
                    shape: "circle",
                    anchorInnerFill: "black",
                    anchorOuterFill: "black",
                    moduleFill: "black",
                }}
                alt="qr" id="qr-code"
            />
        </div>
    </div>
    <div class=" flex justify-center">
        <button class="bg-white m-8 p-2 rounded-md" on:click={downloadImg}
            >Download</button
        >
    </div>
</form>
