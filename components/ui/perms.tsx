'use client'

export function Perms() {


  const htmlD: string =`
              <script src='./perms.js'> </script>
`;

  return (
    <div id="perms" dangerouslySetInnerHTML={{ __html: htmlD }}></div>
  )
}