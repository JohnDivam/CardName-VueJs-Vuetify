<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GenerateCardNameController extends Controller
{
    public function generate(Request $request){
        $request->validate([
            'name'=>'required|string|min:2|max:20',
            'img'=>'required|string|starts_with:assets/images/cards/',
        ]);

        sleep(3);


        /*
        $img = Image::make(public_path($request->img));  

         $img->text($request->name, 400 , 930, function($font) {  
                $font->file(public_path('assets/css/Roboto-Bold.ttf'));  
                $font->size(34);  
                $font->color('#ffffff');  
                $font->align('center');  
                $font->valign('bottom');  
                $font->angle(0);
            });  

            $imagename = rand().time().'.jpg';
            $img->save(public_path('storage/FeastCard/'.$imagename));  

            generate model url for it $imagename!
            */
        return response(['status'=>true,'message'=>__("Successfully generated!")]);
    }
}
