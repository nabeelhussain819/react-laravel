<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Certificate;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return response()->json(User::with('certificate')->paginate(5));
    }
    public function create()
    {
    }
    public function store(Request $request)
    {
        request()->validate([
            'name' => 'required',
            'number' => 'required',
            'DOB'=>'required',
            'certificate_id'=>'required'
        ]);
        User::create($request->all());
        return response()->json([
            'status'=> 200,
            'message'=>'Student Added Successfully',
        ]);
    }
    public function show(Company $company)
    {

    }
}
