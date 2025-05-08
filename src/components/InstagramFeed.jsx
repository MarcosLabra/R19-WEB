const InstagramFeed = () => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://snapwidget.com/embed/123456" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%; height:500px"></iframe>`
        }}
      />
    );
  };
  
  export default InstagramFeed;
  