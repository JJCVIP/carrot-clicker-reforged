export default function PopupMenu({ menu }) {

    function closeDialog() {
        console.log("closeDialog()");
    }

    // JSX
    return (
        <>
            {/* Backdrop */}
            <div id="backdrop" onclick={closeDialog}></div>

            
            <p>{menu}</p>
        </>
    )
}