'use client'

export function Perms() {


  const htmlD: string =`
 <script>
                DeviceOrientationEvent.requestPermission()
                .then((response) => {
                    if (response === "granted") {
                    } else {
                        alert("has to be allowed!");
                    }
                })
                .catch(() => alert("not supported"));
</script>
`;

  return (
    <div id="perms" dangerouslySetInnerHTML={{ __html: htmlD }}></div>
  )
}