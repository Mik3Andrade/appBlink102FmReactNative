package net.handsmidia.blink102;

import android.app.ProgressDialog;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.graphics.PixelFormat;
import android.media.MediaPlayer;
import android.net.Uri;
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Toast;
import android.widget.VideoView;



public class VideoActivity extends AppCompatActivity {
    private String videoPath;

    private static ProgressDialog progressDialog;
    VideoView myVideoView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE);
        setContentView(R.layout.player_fullscreen);
        Intent i = getIntent();
        if(i != null){
            myVideoView = (VideoView) findViewById(R.id.videoView);
            videoPath = i.getStringExtra("VIDEO_URL");
            progressDialog = ProgressDialog.show(VideoActivity.this, "", "Carregando Video...", true);
            progressDialog.setCancelable(true);
            PlayVideo();
        }
        else{
            Toast.makeText(VideoActivity.this, "VideoURL not found", Toast.LENGTH_SHORT).show();
        }


    }

    private void PlayVideo() {
        try {
            getWindow().setFormat(PixelFormat.TRANSLUCENT);

            Uri video = Uri.parse(videoPath);
            myVideoView.setVideoURI(video);
            myVideoView.requestFocus();
            myVideoView.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
                public void onPrepared(MediaPlayer mp) {
                    progressDialog.dismiss();

                    myVideoView.start();
                }
            });


        } catch (Exception e) {
            progressDialog.dismiss();
            System.out.println("Video Play Error :" + e.toString());
            finish();
        }

    }
}
