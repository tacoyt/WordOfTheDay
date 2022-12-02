function notifyMe() {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check if notifs are allowed
      const notification = new Notification("WOTW - Day 190", {body: "verbatim"});
      // Notif
    } else if (Notification.permission !== "denied") {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // Create notif if granted
        if (permission === "granted") {
          const notification = new Notification("WOTW - Day 190", {body: "verbatim"});
          // Notif
        }
      });
    }
  }