document.getElementById('downloadApkBtn').addEventListener('click', function() {
    const apkFilePath = 'App Pacage.zip'; // Replace with the actual path to your APK file
    downloadFile(apkFilePath, 'App Pacage.zip');
  });
  
  document.getElementById('downloadSourceBtn').addEventListener('click', function() {
    const sourceCodePath = 'Shri Shahaji Chhatrapati.rar'; // Replace with the actual path to your source code file
    downloadFile(sourceCodePath, 'Shri Shahaji Chhatrapati.rar');
  });
  
  function downloadFile(filePath, fileName) {
    const link = document.createElement('a');
    link.href = filePath;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  