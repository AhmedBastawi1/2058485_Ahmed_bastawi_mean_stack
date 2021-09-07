const getFormData = () => {
    const formData = {}
    document.querySelectorAll('input')
        .forEach(ip => {
            formData[ip.name] = ip.value
        })
    return formData
}
const getClasses = async () => {
    const classes = await fetch("/api/class/getAllClasses")
    return classes.json()
}
const saveClass = async () => {
    await fetch('/api/class/storeClasses', {
        method: 'POST',
        body: JSON.stringify(getFormData()),
        headers: {
            'Content-Type': 'application/json'
          },
      });
      alert("saved successfully")
}
const UpdateClass = async () => {
    await fetch('/api/class/updateClasses', {
        method: 'PUT',
        body: JSON.stringify(getFormData()),
        headers: {
            'Content-Type': 'application/json'
          },
      });
      alert("updated successfully")
    }
    const deleteClass = async () => {
        const id = document.querySelector('input[name="_id"]').value
        await fetch(`/api/class/deleteClasses/${id}`, {
            method: 'DELETE',
          });
          alert("delted successfully")
        }
    const createClassList = async () => {
        const classes = await getClasses();
        const container = document.querySelector("#table-body")
        classes.forEach(c => {
            container.innerHTML += `
            <tr>
                <td>${c._id}</td>
                <td>${c.cname}</td>
                <td>${c.cinfo}</td>
                <td>$${c.price}</td>
            </tr>`
       })
    }
    
    createClassList();